Minimum Waiting Time

/* You're given a non-empty array of positive integers representing the amounts of time that specific queries take to execute. Only one query can be executed at a time, but the queries can be executed in any order.
A query's waiting time is defined as the amount of time that it must wait before its execution starts. In other words, if a query is executed second, then its waiting time is the duration of the first query; if a query is executed third, then its waiting time is the sum of the durations of the first two queries.
Write a function that returns the minimum amount of total waiting time for all of the queries. For example, if you're given the queries of durations [1, 4, 5], then the total waiting time if the queries were executed in
the order of [5, 1, 4] would be (0) + (5) + (5 + 1) = 11. */

function minimumWaitingTime(queries) {
  // sort array from small to large so the largest wait is last and doesn't happen.
  const data = queries.sort((a,b) => a - b)
  let totalTime = 0
  // iterate over sorted queries
  for(let i = 0; i < data.length; i++){
    const currentTaskTime = data[i]
    const remainingTasks = data.length - (i + 1)
    // Every task after 'currentTask', must wait 'currentTaskTime'. 
    // So we add 'currentTaskTime' for remaining elements by multiplying the time it takes, to remaining tasks. 
      totalTime += currentTaskTime * remainingTasks
  }

  return totalTime
}