import { useState } from 'react';
import page from '../../styles/modules/page/page.module.css';
import PrintJson from '../../components/PrintJSON/PrintJSON';

const HomePage = () => {

    let pageStyles = `${page.wrapper}`;

    const [list, setList] = useState(["A", "B", "C", "A"])
    const [listofUsers, setListOfUsers] = useState(
        [
            {
                name : "Anders",
                address : {
                    street : "Gyden",
                    number: "9B"
                }
            },
            {
                name : "John",
                address : {
                    street : "Solsortevej",
                    number: "99"
                }
            },
            {
                name : "Pernille",
                address : {
                    street : "Solsortevej",
                    number: "99"
                }
            }
        ]
    )

    return (
        <div className={pageStyles}>
            <div>
                Home Page

                <h1>Primitiv</h1>

                {list.map( (item, index) => {

                       
                    return <div key={index}>{item} - {index}</div>
                    

                } )}

                <h1>Objecter</h1>
                {listofUsers.map( (item, index) => {

                                    
                    return <div key={index}>{item.name} - {index}</div>


                } )}

                <h1>Debuggin</h1>
                {listofUsers.map( (item, index) => {

                                                    
                    return <PrintJson key={index} jsonobj={item} headline={item.name}></PrintJson>


                } )}

            </div>
        </div>
    );
};
export default HomePage;