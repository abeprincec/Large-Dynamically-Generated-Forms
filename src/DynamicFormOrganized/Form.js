import React, { PureComponent } from 'react'

import Title from './Title'
import Body from './Body'

import { albums } from './../formData'
import styles from './../styles'

class Form extends PureComponent {
	state = {}
	handleSubmit = (e) => {
		e.preventDefault()
		console.log('Submitting Form! Form data:', this.state)
	}
	render() {
		return (
			<form style={styles.form} onSubmit={this.handleSubmit}>
				<h1 style={styles.formTitle}>Dynamic Form Organized</h1>
				<div style={styles.accordian}>
					{albums.map((album) => {
						const { albumId, albumName } = album
						return (
							<div key={albumId} style={styles.accordianItem}>
								<Title albumName={albumName} />
								<Body
									albumId={albumId}
									state={this.state}
									setState={(object) => this.setState(object)}
								/>
							</div>
						)
					})}
				</div>
				<button type="submit">Submit</button>
			</form>
		)
	}
}

export default Form