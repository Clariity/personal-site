import { LinkText } from "../utils/LinkText";
import { Text } from "../utils/Text";

type ProjectContentsProps = {
  meta: {
    title: string;
    description: string;
    date: string;
    tags: string[];
    headings: string[];
  };
};

export function ProjectContents({ meta }: ProjectContentsProps) {
  return (
    <div className="hidden lg:block w-1/4 sticky top-6 self-start">
      <div className="flex">
        <div className="mr-auto text-right text-sm sm:text-lg mb-2">
          <LinkText href="/projects">
            <i className="material-icons see-all-icon mr-2 text-3xl rotate-180">
              read_more
            </i>
            Back to Projects
          </LinkText>
        </div>
      </div>

      <div className="flex flex-col border-4 border-primary p-4 mr-8 rounded-lg shadow-lg overflow-x-hidden">
        <Text>Table of contents</Text>
        <ol className="flex flex-col list-decimal mt-2 ml-4 lg:ml-8">
          {meta.headings?.map((h) => (
            <li key={h} className="mr-auto">
              <LinkText
                href={`#${encodeURIComponent(
                  h.toLowerCase().replace(/\s/g, "-").replace(/\?/g, "")
                )}`}
              >
                <Text>{h}</Text>
              </LinkText>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
