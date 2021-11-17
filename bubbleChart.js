// Bar and Bubble charts
// Create the buildCharts function.
function buildCharts(sample) {
  // Use d3.json to load and retrieve the samples.json file 
  d3.json("samples.json").then((data) => {
    

    // Deliverable 1 Step 10. Use Plotly to plot the data with the layout. 
    Plotly.newPlot(); 

    // 1. Create the trace for the bubble chart.
    var bubbleTrace = {
      x: sampleIds,
      y: sampleValues,
      text:sampleLabels,
      mode: "markers",
      marker: { 
         color: sampleIds,
         colorscale: "Earth",
         size: sampleValues
       }
      };
    
    var bubbleData = [bubbleTrace];

    // 2. Create the layout for the bubble chart.
    var bubbleLayout = {
      title: `Bacteria Cultures Per Sample`,
        showlegend: "false ",
        xaxis: {title: "OTU ID"},
      
    };

    // 3. Use Plotly to plot the data with the layout.
    Plotly.newPlot("bubble",bubbleData, bubbleLayout); 
  });
}
