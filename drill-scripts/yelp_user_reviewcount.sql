use dfs.yelp;
alter session set `store.format`='json';
create table yelp_user_reviewcount as
select name as username, sum(review_count) as reviewcount 
from `yelp_user` 
group by name order by 2 desc limit 10;
