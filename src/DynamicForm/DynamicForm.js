import React, { Component } from 'react'

import { albums, fields } from './../formData'

import styles from './../styles'

class App extends Component {
	state = {}
	render() {
		console.log(this.state)
		return (
			<form style={styles.form}>
				<h1 style={styles.formTitle}>Dynamic Form</h1>
				<div style={styles.accordian}>
					{albums.map((album) => {
						const { albumId, albumName } = album
						return (
							<div key={albumId} style={styles.accordianItem}>
								<div style={styles.accordianTitleWrapper}>
									<h3 style={styles.accordianTitle}>{albumName}</h3>
									<div
										className="accordion__arrow"
										role="presentation"
										style={styles.sectionArrow}
									/>
								</div>
								<div style={styles.accordianBody}>
									{fields.map((field) => {
										const {
											fieldId,
											fieldName,
											fieldType,
											fieldOptions,
										} = field

										switch (fieldType) {
											case 'text':
												return (
													<div style={styles.formRow} key={fieldId}>
														<label
															htmlFor={fieldId}
															style={styles.rowLabel}
														>
															{fieldName}
														</label>
														<input
															type="text"
															id={fieldId}
															style={styles.textInput}
															onChange={(event) =>
																this.setState({
																	[`${albumId}_${fieldId}`]: event
																		.target.value,
																})
															}
															value={
																this.state[`${albumId}_${fieldId}`]
															}
														/>
													</div>
												)
											case 'textarea':
												return (
													<div style={styles.formRow} key={fieldId}>
														<label
															htmlFor={fieldId}
															style={styles.rowLabel}
														>
															{fieldName}
														</label>
														<textarea
															id={fieldId}
															style={styles.textareaInput}
															onChange={(event) =>
																this.setState({
																	[`${albumId}_${fieldId}`]: event
																		.target.value,
																})
															}
															value={
																this.state[`${albumId}_${fieldId}`]
															}
														/>
													</div>
												)
											case 'radio':
												return (
													<div style={styles.formRow} key={fieldId}>
														<label style={styles.rowLabel}>
															{fieldName}
														</label>
														{fieldOptions.map((option, index) => (
															<div
																style={styles.radioOptionRow}
																key={`option_${index}`}
															>
																<input
																	type="radio"
																	id={`${albumId}_${fieldId}_${option}`}
																	value={option}
																	onChange={(event) =>
																		this.setState({
																			[`${albumId}_${fieldId}`]: event
																				.target.value,
																		})
																	}
																	checked={
																		this.state[
																			`${albumId}_${fieldId}`
																		] === option
																	}
																/>
																<label
																	htmlFor={`${albumId}_${fieldId}_${option}`}
																>
																	{option}
																</label>
															</div>
														))}
													</div>
												)
											default:
												return null
										}
									})}
								</div>
							</div>
						)
					})}
				</div>
			</form>
		)
	}
}

export default App