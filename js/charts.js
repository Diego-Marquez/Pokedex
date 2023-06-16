const ctx = document.getElementById('stats');

export function createChart(stats){
  return new Chart(ctx, {
    type: 'radar',
    data: {
      labels: [
        'HP',
        'Attack',
        'Defense',
        ['Special', 'Attack'],
        ['Special', 'Defense'],
        'Speed',
      ],
      datasets:[{
        data: stats,
        backgroundColor:'#ff896550',
        borderColor: '#FF8A65',
        borderWidth: 2,

        borderCapStyle: 'round',

        pointBorderColor:'#163355',
        pointBorderWidth: '1',
        pointHoverBackgroundColor: 'white',
        pointHoverBorderColor: 'white',
        pointHoverRadius:'5',

     
      }]
    },
    options: {
      maintainAspectRatio: false,

      elemens:{
        line: {
          borderCapStyle:'butt'
        },
        font:{
          family:'monospace',
          size: 26
        }
      },
      point:{
        
      },
      plugins:{
        legend:{
          display: false,

        },
       

  
      },
   scales:{
      r:{
        grid:{
          color: 'white',
          
        },
        pointLabels:{
          color: 'white',
        },
        angleLines:{
          color: 'white'
        },

      },

    }
  },
  });
}