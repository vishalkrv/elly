use dfs.yelp;
alter session set `store.format`='json';
create table yelp_business_state as
select state, count(*)  totalreviews from `yelp_business`
group by state order by 2 desc limit 10;
