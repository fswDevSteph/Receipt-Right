import './Upload.css';
import HeaderNav from '../HeaderNav/HeaderNav';
import FooterNav from '../FooterNav/FooterNav';

const fileSelected = (e) => { //function will be called when the file is selected		
    console.log(e.target.files[0]); // logs selected file		

}
function Upload() {
    return (
        <div>
            <p>Upload Receipt Body</p>
            <input type="file" onChange={fileSelected} />
        </div>
    )
}

export default Upload;		