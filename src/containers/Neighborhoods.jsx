import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import locations from '../data/locations';

const slugify = (text) =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const Neighborhoods = () => {
  const [query, setQuery] = useState('');

  const neighborhoods = useMemo(() => {
    if (!Array.isArray(locations)) return [];

    return [...new Set(
      locations
        .map(loc => loc.neighborhood)
        .filter(n => typeof n === 'string')
    )].sort((a, b) => a.localeCompare(b));
  }, []);

  const filtered = useMemo(() => {
    return neighborhoods.filter(name =>
      name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, neighborhoods]);

  return (
    <div className="neighborhood-list">
      <h2>Neighborhoods ({filtered.length}/{neighborhoods.length})</h2>
      <input
        type="text"
        placeholder="Search neighborhoods..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="neighborhood-search"
      />
      <ul>
        {console.log('filtered:', filtered)}

        {filtered.map((name, index) => (
          <li key={index}>
            <Link to={`/neighborhoods/${slugify(name)}`}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Neighborhoods;