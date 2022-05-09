import ReactDOM from 'react-dom';
import Posts from './Posts';
import SideBar from './SideBar';
import Stories from './Stories';
import TopBar from './TopBar';



function AppBody(){
    return (
        <div>
            <TopBar />
            <div class="page-content">
                <div class="main-content-div">
                    <Stories />
                    <Posts />
                </div>
                <SideBar />
            </div>
        </div>
    )
}

const app = AppBody()
ReactDOM.render(app, document.querySelector(".root"));