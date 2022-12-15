type Project = {
  id: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
};

type WrapperProps = {
  children: import("react").ReactNode;
};
