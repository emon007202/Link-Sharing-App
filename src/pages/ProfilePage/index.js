
import NavBar from "../../comonents/Navbar";
import MockupPreview from "../../comonents/Mockup";
import { ProfileDetails } from "../../comonents/ProfileDetails";
import { useLocation } from "react-router-dom";
import AddLink from "../../comonents/AddLink";

function ProfilePage() {
  const { pathname } = useLocation()
  return (<>
    <NavBar />
    <div style={{
      display:'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 40
    }}>
      <MockupPreview />
      {pathname === '/' ? <ProfileDetails />: <AddLink/>}
    </div>
  </>
  );
}

export default ProfilePage
