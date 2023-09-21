
import NavBar from "../../comonents/Navbar";
import MockupPreview from "../../comonents/Mockup";
import AddLink from "../../comonents/AddLink";

function AddLinkPage() {
  return (<>
    <NavBar />
    <div style={{
      display:'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <MockupPreview />
      <AddLink />
    </div>
  </>
  );
}

export default AddLinkPage
