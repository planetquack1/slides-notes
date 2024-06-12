import React from "react"

class Download extends React.Component {

  constructor(props) {
    super(props);
    this.notes = props.notes;
    this.title = props.title;
  }

  downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([document.getElementById('input').value],
      { type: 'text/plain;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = this.title + ".txt";
    document.body.appendChild(element);
    element.click();
  }

  render() {
    return (
      <div>
        <input id="input" />
        <button onClick={this.downloadTxtFile}>Download</button>
      </div>
    );
  }
}

export default Download