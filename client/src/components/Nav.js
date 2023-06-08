import {useSelector} from 'react-redux';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

const Nav = () => {
  const user = useSelector((state) => state.user?.user);
  const loggedInUser = useSelector((state) => state.auth.loggedIn);

 
  
  console.log(user)
  console.log(loggedInUser)
  return (
    <>
      {loggedInUser && user ? <PrivateRoutes /> : <PublicRoutes />}
    </>
  );
};

export default Nav;
