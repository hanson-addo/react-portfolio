import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import './index.scss';
import HeadTag from '../Home/HeadTag';

const Layout = ()=>{
    return (
        
        <div className="App">
           
            <Sidebar />
            <div className='page'>
            
            <span className='tags top-head'>&lt;head&gt;</span>
            <HeadTag />
                <span className='tags bottom-head'>
                    &lt;/head&gt;
                    <br />
                </span>


                <span className='tags top-tags'>&lt;body&gt;</span>

                <Outlet />

                <span className='tags bottom-tags'>
                    &lt;/body&gt;
                    <br />
                    <span className='bottom-tag-html'>&lt;/html&gt;</span>
                </span>


            </div>
        </div>
    )
}

export default Layout;