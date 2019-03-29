import React from 'react';

const renderPerson = (props) => {
	return (
		<div>
			<div className="panel">
				<h3>Person Description</h3>
				<div className="main-wrapper">

					<div className="photo-wrapper">
						<img alt="face" src=""/>
					</div>

					<div className="form-fields">
						
						<div className="form_element">
							Name:
							<input
								type="text"
								placeholder="Enter name"
								value={props.data.name}
							/>
						</div>
						<div className="form_element">
							Age:
							<input
								type="text"
								placeholder="Enter age"
								value={props.data.age}
							/>
						</div>
						<div className="form_element">
							Birthday:
							<input
								type="text"
								placeholder="Enter birthday"
								value={props.data.birthday}
							/>
						</div>
						<div className="form_element">
							Profession:
							<input
								type="text"
								placeholder="Enter profession"
								value={props.data.profession}
							/>
						</div>
						<div className="form_element">
							Location:
							<input
								type="text"
								placeholder="Enter location"
								value={props.data.location}
							/>
						</div>
					</div>
				</div>

				<div className="notes">
					<textarea placeholder="additional notes"/>
				</div>
			</div>

			<div className="detailed-wrapper panel">

			</div>
		
		</div>
	)
}

export default renderPerson;