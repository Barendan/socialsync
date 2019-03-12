import React, {Component} from 'react';



class MainPanel extends Component {

	state = {
		formdata:{
			name:'Daniel Barenboim',
			age:'26',
			birthday:'April 20th 1992',
			profession:'Full-Stack Dev',
			location:'Dania Beach'
		}
	}

	render() {
		return (
			<div>
				<div className="panel">
					<h3>Person Description</h3>
					<div className="main-wrapper">

						<div className="photo-wrapper">
							<img alt="profile picture" src=""/>
						</div>

						<div className="form-fields">
							
							<div className="form_element">
								Name:
								<input
									type="text"
									placeholder="Enter name"
									value={this.state.formdata.name}
								/>
							</div>
							<div className="form_element">
								Age:
								<input
									type="text"
									placeholder="Enter age"
									value={this.state.formdata.age}
								/>
							</div>
							<div className="form_element">
								Birthday:
								<input
									type="text"
									placeholder="Enter birthday"
									value={this.state.formdata.birthday}
								/>
							</div>
							<div className="form_element">
								Profession:
								<input
									type="text"
									placeholder="Enter profession"
									value={this.state.formdata.profession}
								/>
							</div>
							<div className="form_element">
								Location:
								<input
									type="text"
									placeholder="Enter location"
									value={this.state.formdata.location}
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
		);
	}
}


export default MainPanel;