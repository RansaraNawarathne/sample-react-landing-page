/* eslint-disable react/prop-types */
import './PageContainer.css'

export default function PageContainer({ leftContainer, rightContainer }) {
    return (<div className="page-container">
        <div className="container-unit">
            {leftContainer}
        </div>
        <div className="container-unit">
            {rightContainer}
        </div>
    </div>);
}