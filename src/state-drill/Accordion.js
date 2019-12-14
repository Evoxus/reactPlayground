import React from 'react';
import './Accordion.css'

class Accordion extends React.Component {

  static defaultProps = { 
    sections: [] 
  };

  state = {
    currentSection: null,
  }

  handleButtonClick(index) {
    if(this.state.currentSection === index) {
      this.setState({
        currentSection: null,
      })
    } else {
      this.setState({ 
        currentSection: index,
      })
    }
  }

  renderLi(section, index, currentSection) {
    return (
      <li className="Accordion-item" key={index}>
        <button className="Accordion-btn" type='button'
          onClick={() => this.handleButtonClick(index)}>
          {section.title}
        </button>
        {(currentSection === index) && <p>{section.content}</p>}
      </li>
    )
  }

  render() {
    const currentSection = this.state.currentSection
    const sections = this.props.sections
    return (
      <ul className='Accordion'>
        {sections.map((section, index) =>
          this.renderLi(section, index, currentSection)
        )}
      </ul>
    )
  }
}


export default Accordion;