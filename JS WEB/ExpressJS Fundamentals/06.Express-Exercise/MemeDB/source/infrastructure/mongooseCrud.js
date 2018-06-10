module.exports = (Model) => {
    const modelName = Model.modelName;

    return {
        create: modelData =>
            new Promise((resolve, reject) => {                     
                let entity = new Model(modelData);
                entity         
                    .save()
                    .then(() => {
                        resolve(entity);
                    })
                    .catch(err => {
                        console.log(err);
                        reject(err);
                    });
            }),
        get: id => 
            new Promise((resolve, reject) => {
                Model.findById(id).then(existingEntity => {
                    if (!existingEntity) {
                        let message = `${modelName} with id: ${id} does not exist.`;
                        console.log(message);
                        reject(message);
                        return;
                    }
                    
                    resolve(existingEntity);
                });
            }),
        getAll: () => 
            new Promise((resolve) => {
                Model.find().then(entities => {
                    resolve(entities);
                });
            }),
        delete: id =>
            new Promise((resolve, reject) => {
                Model.findById(id).then(existingEntity => {
                    if (!existingEntity) {
                        let message = `${modelName} with id: ${id} does not exist`;
                        console.log(message);
                        reject(message);
                        return;
                    }

                    existingEntity.remove();
                    resolve(existingEntity);
                });
            })
    };
};