function getModel() {
    let input1,input2,result;
    return{
        init:function (num1,num2,result1) {
            input1 = $(num1);
            input2 = $(num2);
            result = $(result1);
        },
        add:function () {
          result.val(Number(input1.val())+Number(input2.val()))
        },
        subtract:function () {
            result.val(Number(input1.val())-Number(input2.val()))
        }
    }
}