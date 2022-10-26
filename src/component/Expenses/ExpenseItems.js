import './ExpenseItems.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {
  const clickHandler = () => {
    console.log('Clicked !!!');
  };
    console.log(props);
    return (
        <Card className="expense-item">  
         <ExpenseDate date={props?.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
        </Card>

        );
}

export default ExpenseItem;