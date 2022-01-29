'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
  
    
   
    await queryInterface.createTable('users', { 
      id:{
        type:Sequelize.INTEGER(11),
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
    },
    phone:{
        type:Sequelize.INTEGER(11),
        allowNull:false,
        unique:true
    },
    department:{
      type:Sequelize.STRING,
      allowNull:false,
      unique:true
  },
    createdAT:Sequelize.DATE,
    updatedAT:Sequelize.DATE,

     });
     
  },

  async down (queryInterface, Sequelize) {
     
     
     await queryInterface.dropTable('users');
     
  }
};
