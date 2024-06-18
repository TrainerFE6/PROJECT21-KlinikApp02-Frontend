const TableScheduleComponent = () => {
    return (
        <div className="col" id="content-side">
            <div className="head-title">
                <div className="left">
                    <h1>Doctor Schedule Data</h1>
                    <ul className="breadcrumb">
                        <li>
                        <a href="#">Doctor Schedule</a>
                        </li>
                        <li>
                        <i className="bx fa fa-chevron-right" />
                        </li>
                        <li>
                        <a className="active" href="#">
                            Dashboard
                        </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="table-responsive box-tabtab">
            <button type="button" className="btn btn-primary my-3 button-add"><i className="fa fa-plus me-1"></i> Add Data</button>
            <table class="table mt-5">
                <thead>
                    <tr>
                    <th scope="col">No</th>
                    <th scope="col">Doctor Name</th>
                    <th scope="col">From Day</th>
                    <th scope="col">Until Day</th>
                    <th scope="col">Start Time</th>
                    <th scope="col">End Time</th>
                    <th scope="col">Action</th>
                    
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>
                        <div className="button-container">
                            <button className="btn btn-success button-action"><i className="fa-brands fa-readme"></i></button>
                            <button className="btn btn-warning button-action"><i className="fa fa-pen-to-square"></i></button>
                            <button className="btn btn-danger button-action"><i className="fa fa-trash"></i></button>
                        </div>
                    </td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>
                        <div className="button-container">
                            <button className="btn btn-success button-action"><i className="fa-brands fa-readme"></i></button>
                            <button className="btn btn-warning button-action"><i className="fa fa-pen-to-square"></i></button>
                            <button className="btn btn-danger button-action"><i className="fa fa-trash"></i></button>
                        </div>
                    </td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>
                        <div className="button-container">
                            <button className="btn btn-success button-action"><i className="fa-brands fa-readme"></i></button>
                            <button className="btn btn-warning button-action"><i className="fa fa-pen-to-square"></i></button>
                            <button className="btn btn-danger button-action"><i className="fa fa-trash"></i></button>
                        </div>
                    </td>
                    </tr>
                    <tr>
                    <th scope="row">4</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>
                        <div className="button-container">
                            <button className="btn btn-success button-action"><i className="fa-brands fa-readme"></i></button>
                            <button className="btn btn-warning button-action"><i className="fa fa-pen-to-square"></i></button>
                            <button className="btn btn-danger button-action"><i className="fa fa-trash"></i></button>
                        </div>
                    </td>
                    </tr>
                    <tr>
                    <th scope="row">5</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>
                        <div className="button-container">
                            <button className="btn btn-success button-action"><i className="fa-brands fa-readme"></i></button>
                            <button className="btn btn-warning button-action"><i className="fa fa-pen-to-square"></i></button>
                            <button className="btn btn-danger button-action"><i className="fa fa-trash"></i></button>
                        </div>
                    </td>
                    </tr>
                </tbody>
            </table>
            </div>
            
        </div>
    );
}
export default TableScheduleComponent;