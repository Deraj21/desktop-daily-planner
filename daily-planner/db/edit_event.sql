update planner_event
  set start_hour = $2,
      end_hour = $3,
      day = $4,
      month = $5,
      year = $6,
      description = $7
  where id = $1;