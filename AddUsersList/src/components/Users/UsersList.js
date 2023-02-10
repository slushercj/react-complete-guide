import Card from "../UI/Card";
import styles from "./UsersList.module.css";

const UsersList = (props) => {
  const usersList = props.users.map((user) => (
    <li key={user.id}>
      {user.name} ({user.age} years old)
    </li>
  ));

  return (
    <Card className={styles.users}>
      <ul>{usersList}</ul>
    </Card>
  );
};

export default UsersList;
