function solution (primary,secondary,startCoordinates=[],startMarchute) {
    let rowsSecondary = secondary.length;
    let columnsSecondary = secondary[0].length;
    let rowsPrimary = primary.length;
    let columnsPrimary = primary[0].length;
    let endOfCuadrantRow = Math.floor(rowsPrimary-1)/2;
    let endOfCuadrantColumn = Math.floor(columnsPrimary-1)/2;
    let endColumn = 0;
    let endRow = 0;
    startCoordinates.forEach(coordinates=>{
        let startRow = coordinates[0];
        let startColumn = coordinates[1];
        if(rowsPrimary-1-startRow>rowsSecondary-1){
            endRow=startRow+rowsSecondary-1;
        }
        if(columnsPrimary-1-startColumn>columnsSecondary-1){
            endColumn=startColumn+columnsSecondary-1;
        }
        if(columnsPrimary-1-startColumn<=columnsSecondary-1){
            endColumn=columnsPrimary-1;
        }
        if(rowsPrimary-1-startRow<=rowsSecondary-1){
            endRow=rowsPrimary-1;
        }
        for(let i = startRow,i1=0;i<=endRow;i++,i1++){
            for(let j = startColumn,j1=0;j<=endColumn;j++,j1++){
                if(secondary[i1][j1]===1){
                    if(primary[i][j]===0){
                        primary[i][j]=1;
                    }
                    else{
                        primary[i][j]=0;
                    }
                }
            }
        }
    })
    let startMarchuteRow = startMarchute[0];
    let startMarchuteColumn = startMarchute[1];
    let curentCvadrant = 0;
    let steps=1;
    primary[startMarchuteRow][startMarchuteColumn]=1;
    while(true){
        steps++;
        if(startMarchuteRow<=endOfCuadrantRow&&startMarchuteColumn<=endOfCuadrantColumn){
            curentCvadrant=2;
        }
        else if(startMarchuteRow>endOfCuadrantRow&&startMarchuteColumn<=endOfCuadrantColumn){
            curentCvadrant=3;
        }
        else if(startMarchuteRow<=endOfCuadrantRow&&startMarchuteColumn>endOfCuadrantColumn){
            curentCvadrant=1;
        }
        else{
            curentCvadrant=4;
        }
        if(startMarchuteRow===0){
            if(primary[startMarchuteRow][startMarchuteColumn+1]===0){
                primary[startMarchuteRow][startMarchuteColumn+1]=1;
                startMarchuteColumn++;
            }
            else if(primary[startMarchuteRow][startMarchuteColumn-1]===0){
                primary[startMarchuteRow][startMarchuteColumn-1]=1;
                startMarchuteColumn--;
            }
            else if(primary[startMarchuteRow+1][startMarchuteColumn]===0){
                primary[startMarchuteRow+1][startMarchuteColumn]=1;
                startMarchuteRow++;
            }
        }
        else if(startMarchuteColumn===0){
            if(primary[startMarchuteRow][startMarchuteColumn+1]===0){
                primary[startMarchuteRow][startMarchuteColumn+1]=1;
                startMarchuteColumn++;
            }
            else if(primary[startMarchuteRow-1][startMarchuteColumn]===0){
                primary[startMarchuteRow-1][startMarchuteColumn]=1;
                startMarchuteRow--;
            }
            else if(primary[startMarchuteRow+1][startMarchuteColumn]===0){
                primary[startMarchuteRow+1][startMarchuteColumn]=1;
                startMarchuteRow++;
            }
        }
        else if(startMarchuteRow===rowsPrimary-1){
            if(primary[startMarchuteRow][startMarchuteColumn+1]===0){
                primary[startMarchuteRow][startMarchuteColumn+1]=1;
                startMarchuteColumn++;
            }
            else if(primary[startMarchuteRow-1][startMarchuteColumn]===0){
                primary[startMarchuteRow-1][startMarchuteColumn]=1;
                startMarchuteRow--;
            }
            else if(primary[startMarchuteRow][startMarchuteColumn-1]===0){
                primary[startMarchuteRow][startMarchuteColumn-1]=1;
                startMarchuteColumn--;
            }
        }
        else if(startMarchuteColumn===columnsPrimary-1){
            if(primary[startMarchuteRow+1][startMarchuteColumn]===0){
                primary[startMarchuteRow+1][startMarchuteColumn]=1;
                startMarchuteRow++;
            }
            else if(primary[startMarchuteRow-1][startMarchuteColumn]===0){
                primary[startMarchuteRow-1][startMarchuteColumn]=1;
                startMarchuteRow--;
            }
            else if(primary[startMarchuteRow][startMarchuteColumn-1]===0){
                primary[startMarchuteRow][startMarchuteColumn-1]=1;
                startMarchuteColumn--;
            }
        }
        else{
            if(primary[startMarchuteRow+1][startMarchuteColumn]===0){
                primary[startMarchuteRow+1][startMarchuteColumn]=1;
                startMarchuteRow++;
            }
            else if(primary[startMarchuteRow-1][startMarchuteColumn]===0){
                primary[startMarchuteRow-1][startMarchuteColumn]=1;
                startMarchuteRow--;
            }
            else if(primary[startMarchuteRow][startMarchuteColumn-1]===0){
                primary[startMarchuteRow][startMarchuteColumn-1]=1;
                startMarchuteColumn--;
            }
            else if(primary[startMarchuteRow][startMarchuteColumn+1]===0){
                primary[startMarchuteRow][startMarchuteColumn+1]=1
                startMarchuteColumn++;
            }
            else{
                console.log(steps-1)
                console.log('Dead end '+curentCvadrant)
                break;
            }
        }
        if(steps>1&&startMarchuteColumn===0){
            console.log(steps)
            console.log('Left')
            break
        }
        if(steps>1&&startMarchuteColumn===columnsPrimary-1){
            console.log(steps)
            console.log('Right')
            break
        }
        if(steps>1&&startMarchuteRow===0){
            console.log(steps)
            console.log('Top')
            break
        }
        if(steps>1&&startMarchuteRow===rowsPrimary-1){
            console.log(steps)
            console.log('Bottom')
            break
        }

    }


}
solution([[1, 1, 0, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 0, 0, 0, 1],
        [1, 0, 0, 1, 0, 0, 0, 1],
        [0, 0, 0, 1, 1, 0, 0, 1],
        [1, 0, 0, 1, 1, 1, 1, 1],
        [1, 0, 1, 1, 0, 1, 0, 0]],
    [[0, 1, 1],
        [0, 1, 0],
        [1, 1, 0]],
    [[1, 1],
        [2, 3],
        [5, 3]],
    [0, 2]





)