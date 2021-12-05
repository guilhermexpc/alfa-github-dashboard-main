import { GoStar, GoRepoForked } from "react-icons/go";
import "./Card.css";

export default function RepositoryCard({ repo, isSelected, onClick}) {  
  console.warn(repo);
  return (
    <li
      onClick={onClick}
      className={`RepositoryCard ${isSelected && "RepositoryCard--selected"}`}
    >
      <div className="RepositoryCardInside">
        <h3>{repo.name}</h3>
        <div className="RepositoryCard__additional-info">
          <span>
            <GoStar /> {repo.stargazerCount || 0}
          </span>
          <span>
            <GoRepoForked /> {repo.forkCount || 0}
          </span>
          {repo.language && <span>{repo.language}</span>}
        </div>
      </div>
    </li>
  );
}
