chrome.processes.onUpdated.addListener(
   (processes) => {
      for(process in processes)
      {
        var tasks = processes[process].tasks;
        for(task in tasks)
        {
          var title = tasks[task].title;
          if(title)
          {
            // Filter the tab by title
            if(title.includes('Lead'))
            {
              // Filter by CPU spike
              if(processes[process].cpu > 75.0)
              {
                console.log('Found tab: ' + task.tabid + ' with title ' + title);
                console.log('Date: ' + new Date() + 'CPU: ' + processes[process].cpu + ' tab: ' + tasks[task].tabId);                
              }
            }
          }
        }
      }
  });


