SELECT *
FROM pixar.theater AS t
LEFT JOIN pixar.movies AS m ON t.id = m.theater_id
ORDER BY t.name;