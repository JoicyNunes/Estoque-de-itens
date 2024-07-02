import '../styles/list.css'
import FormList from '../components/FormList';
import axios from "axios";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

function List() {
    const [list, setList] = useState([]);
    const [onEdit, setOnEdit] = useState(null);

   const getList= async () => {
     try {
       const res = await axios.get("http://localhost:8800/");
       setList(res.data.sort((a, b) => (a.ID > b.ID ? 1 : -1)));
     } catch (error) {
       toast.error(error);
     }
   };

   const handleFormSubmit = () => {
     getList();
   };

   useEffect(() => {
     getList();
   }, [setList]);

    return(
        <>
            <div className="container">
                <form className="container-list">
                    <FormList
                        onEdit={onEdit}
                        setOnEdit={setOnEdit}
                        getList={getList}
                        onFormSubmit={handleFormSubmit}
                    />
                </form>
            </div>
        </>
    )
};

export default List;