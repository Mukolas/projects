import React, {Component} from 'react';
import './Users.css'
class UserComponent extends Component {
    render() {
        let {item,cls}=this.props;
        console.log(item);
        return (
            <div className={cls}>Імя: {item.name} Вік: {item.age} Розмір ноги: {item.footSize}</div>
        );
    }
}

export default UserComponent;