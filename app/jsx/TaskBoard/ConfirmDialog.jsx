import React from 'React';

class ConfirmDialog extends React.Component{
  render() {
    return (
    <div id="task-delete-confirm" className="modal fade in">
      <div className="modal-dialog">
        <div className="modal-content">

          <div className="modal-header">
            <a className="btn btn-default" data-dismiss="modal"><span className="glyphicon glyphicon-remove"></span></a>
            <h4 className="modal-title">Modal Heading</h4>
          </div>
          <div className="modal-body">
            <p>{this.props.message}</p>
          </div>
          <div className="modal-footer">
            <div className="btn-group">
              <button className="btn btn-danger" data-dismiss="modal" 
                onClick={() => this.props.onConfirm}>
                <span className="glyphicon glyphicon-remove"></span> 
                Confirm
              </button>
              <button className="btn btn-primary"><span className="glyphicon glyphicon-check"></span> Cancel</button>
            </div>
          </div>

        </div><!-- /.modal-content -->
      </div><!-- /.modal-dalog -->
      </div><!-- /.modal -->
    )
  }
}
