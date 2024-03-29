import React,{useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [newInput,setNewInput]= useState("");
	const [addTodo , setAddTodo]=useState(["A test task"]);

	

	const handleChange= (e)=>{
		setNewInput(e.target.value);
		
	}
	const handleKeyDown = (e) => {
		if (e.key === "Enter") {
	
			setAddTodo(addTodo.concat(newInput));
			setNewInput("");
		}
	  };

	return(

	
		<div className="container ">

			<div className="mt-2 text-center ">
				<h1>My todo list</h1>	
			</div>
		
			<div className="m-2">
				
				<input type="text" class="form-control" placeholder="Add new task" onChange={handleChange} 
				onKeyDown={handleKeyDown}/>
					

				<ul class="list-group list-group-flush">
			
					{addTodo.map ((item, index) => (
						

						<li class=" list-group-item d-flex justify-content-between alaing-items-centeralign-items-center mt-4 ">
							{item}
							<button className="btn-close" onClick={() => setAddTodo(
								addTodo.filter(
									(t,curretIndex) => index != curretIndex
								))}></button>

							
						
						</li>				
					))}
				     
				</ul>
			</div>

			<div className="d-flex flex-row m-2">{addTodo.length} Pending tasks</div>

		</div>

	)
};

export default Home;
