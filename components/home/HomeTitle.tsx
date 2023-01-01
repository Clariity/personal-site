import { ButtonLink } from "../utils/ButtonLink";
import { Text } from "../utils/Text";
import { TitleCard } from "../utils/TitleCard";
import { TitleImage } from "../utils/TitleImage";

export function HomeTitle() {
  function SubTitle() {
    return (
      <div className="flex flex-col justify-center items-center mt-4 text-center">
        <Text>Software Engineer • Hooked on React • Learning Spanish</Text>
        <div className="flex mt-6">
          <div className="mr-2">
            <ButtonLink link="/about" secondary>
              About Me
            </ButtonLink>
          </div>
          <div className="ml-2">
            <ButtonLink link="/projects" secondary>
              Projects
            </ButtonLink>
          </div>
        </div>
      </div>
    );
  }

  return (
    <TitleCard subTitle={SubTitle()} title="Hi there, I'm Ryan!">
      <TitleImage />
    </TitleCard>
  );
}
