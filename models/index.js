const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack', {
    logging: false
});

function generateSlug (title) {
    return title.replace(/\s+/g, '_').replace(/\W/g, '');
  }

const Page = db.define('page', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: true
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    status: {
        type: Sequelize.ENUM('open', 'closed')
    }
    });
    
const User = db.define('user', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true
          }
    }
    });

Page.beforeValidate((pageInstance, optionsObject)=>{
    pageInstance.slug = generateSlug(pageInstance.title)
})

module.exports = {
    db, Page, User
    }
    