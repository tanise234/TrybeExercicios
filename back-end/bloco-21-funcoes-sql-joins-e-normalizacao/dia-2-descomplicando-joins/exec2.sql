SELECT m.title, b.domestic_sales + b.international_sales
FROM pixar.movies AS m
INNER JOIN pixar.box_office AS b
ON m.id = movie_id
WHERE b.domestic_sales < b.international_sales;