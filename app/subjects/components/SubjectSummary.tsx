import Link from "next/link";
import React from "react";

const SubjectSummary = ({ title, mandatory, levels }) => {
  return (
    <article className="border px-4 py-2 flex-1 min-w-72 rounded-lg hover:shadow-lg">
      <h2>{title}</h2>
      <div className="flex gap-2">
        {levels.map((level) => (
          <Link
            key={level}
            href={`/leaving-cert/${title}/${level}`}
            className="text-blue-500 hover:text-blue-700 hover:translate-x-1 underline"
          >
            {level}
          </Link>
        ))}
      </div>
    </article>
  );
};

export default SubjectSummary;
