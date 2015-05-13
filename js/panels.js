var Panel = React.createClass({
  loadAllServices: function() {
    
  },
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.loadAllServices();
    setInterval(this.loadAllServices, this.props.pollInterval);
  },
  render: function() {
    var panels = this.state.data.map(function (panel) {
      var classString = 'panel';
      if (panel.success) {
        classString += ' panel-success';
      } else {
        classString += ' panel-danger';
      }
      return (
        <div className="col-sm-4">
          <div className={classString}>
            <PanelHeader serviceName={panel.serviceName} />
            <PanelBody serviceData={panel.serviceData} />
          </div>
        </div>
      );
    });
    return (
      <div className="panels">
        {panels}
      </div>
    );
  }
});

var PanelHeader = React.createClass({
	render: function() {
		return (
			<div className="panel-heading">
        <h3 className="panel-title">{this.props.serviceName}</h3>
      </div>
		);
	}
});

var PanelBody = React.createClass({
	render: function() {
    var data = this.props.serviceData;
    var items = [];
    for(item in data) {
      items.push(<li>{item}: {data[item]}</li>);
    }
    
		return (
			<div className="panel-body">
        <ul>
          {items}
        </ul>
      </div>
		);
	}
});