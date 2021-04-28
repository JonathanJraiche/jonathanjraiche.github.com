import React from 'react';
import MaterialTable from "material-table";

const columns = [
    {
        title: "Album",
        field: "Album",
    },
    {
        title: "Artist",
        field: "Artist",
    },
    {
        title: "Progression",
        field: "ChordProg",
    },
    {
        title: "Recorded Key",
        field: "Key",
    },
    {
        title: "Song",
        field: "Song",
    },
    {
        title: "Date",
        field: "Date",
    },
]


class Grid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            rows: []
        };
    }

    componentDidMount() {
        fetch("https://v1.nocodeapi.com/rcorvelay/google_sheets/pkWGUQDidUKgjBqn?tabId=Sheet1")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    this.setState({
                        isLoaded: true,
                        rows: result.data
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }
    render() {
        if (!this.state.isLoaded) {
            return <p>Loading</p>
        }
        if (this.state.error) {
            return <p>Error: {this.state.error}</p>
        }
        return (
            <MaterialTable
                data={this.props.chordProg === "" 
                    ? this.state.rows 
                    : this.state.rows.filter(row => row.ChordProg.startsWith(this.props.chordProg) )}
                columns={columns}
                options={{ showTitle: false, search: true, }}
            />
        )
    }
}
export default Grid;
 //<MDBTableHead columns={data.columns} />
