SELECT *
FROM pixar.movies AS m
RIGHT JOIN pixar.theater AS t ON t.id = m.theater_id
ORDER BY t.name;