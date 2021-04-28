import React from 'react';
import ChordButton from './components/ChordButton';
import Grid from './components/Grid.jsx';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chordProg: '',
            chordCount: 0,
            showAbout: false
        }
        this.handleChordClick = this.handleChordClick.bind(this);
        this.handleResetClick = this.handleResetClick.bind(this);
        this.toggleAbout = this.toggleAbout.bind(this);
    }
    toggleAbout() {
        this.setState({
            showAbout: !this.state.showAbout
        })
    }
    handleResetClick() {
        this.setState({
            chordProg: "",
            chordCount: 0
        })
    }
    handleChordClick(chord) {
        var chordCount = this.state.chordCount;
        if (chordCount > 15) {
            return;
        }
        var chordProg = this.state.chordProg;
        
        chordProg += chord + " ";
        chordCount += 1;
        this.setState({
            chordProg: chordProg,
            chordCount: chordCount
        })


    }

    render() {
        console.log('its rendering');
        return (
            <div id='container'>
                <div className='header' >
                    <h1>Progression Search</h1>
                    <button onClick={this.toggleAbout}>About</button>
                </div>

                {this.state.showAbout &&
                    <div className='About'>
                        <p>About da project</p>
                        <button onClick={this.toggleAbout}>About</button>

                    </div>
                }
                <div className='display'>
                    <p id="userProg">{this.state.chordProg}</p>
                </div>
                <div className="chordRow">
                    <ChordButton onclick={this.handleChordClick} chord='I' />
                    <ChordButton onclick={this.handleChordClick} chord='II' />
                    <ChordButton onclick={this.handleChordClick} chord='III' />
                    <ChordButton onclick={this.handleChordClick} chord='IV' />
                    <ChordButton onclick={this.handleChordClick} chord='V' />
                    <ChordButton onclick={this.handleChordClick} chord='VI' />
                    <ChordButton onclick={this.handleChordClick} chord='VII' />
                </div>
                <div className="chordRow">
                    <ChordButton onclick={this.handleChordClick} chord='i' />
                    <ChordButton onclick={this.handleChordClick} chord='ii' />
                    <ChordButton onclick={this.handleChordClick} chord='iii' />
                    <ChordButton onclick={this.handleChordClick} chord='iv' />
                    <ChordButton onclick={this.handleChordClick} chord='v' />
                    <ChordButton onclick={this.handleChordClick} chord='vi' />
                    <ChordButton onclick={this.handleChordClick} chord='vii' />
                </div>
                <div className='reset'>
                    <button type='button' onClick={this.handleResetClick}>Reset</button>
                </div>
                <div className='grid'>
                    <Grid chordProg={this.state.chordProg}/>
                </div>
            </div>
        )
    }
}

export default App;