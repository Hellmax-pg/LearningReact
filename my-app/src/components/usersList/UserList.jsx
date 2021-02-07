import './UserList.css';
import User from  './User';


// {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       }
// }

function UserList(props) {
    console.log('users = ', props.users)
    const usersJsx = props.users.map((user) => {
        return <User id={user.id} fullName={user.name} userName={user.username} email={user.email}/>
        // return <li key = {comment.id}>{comment.text} <b> by {comment.author}</b></li>
    })
  return (
    <div>
        {usersJsx}
        {/* <User id="1" fullName="Anton Antonov 1" userName="Bret" email="Sincere@april.biz"/>
        <User id="2" fullName="Anton Antonov 2" userName="Bret" email="Sincere@april.biz"/>
        <User id="3" fullName="Anton Antonov 3" userName="Bret" email="Sincere@april.biz"/> */}
    </div>
  );
}

export default UserList;
