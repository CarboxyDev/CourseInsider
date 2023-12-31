import { cn } from '@/lib/util';
import IconifyIcon from '../IconifyIcon';

interface ExplanationCardProps {
  order: number;
  title: string;
  content: string;
  iconName: string /** Only supports Iconify icons */;
}

const ExplanationCard = (props: ExplanationCardProps) => {
  const { title, content, iconName, order } = props;

  return (
    <>
      <div
        className={cn(
          'w-80 rounded-xl border border-zinc-300 bg-[#FCFCFC] transition duration-500 ease-in-out hover:scale-105 hover:border-zinc-300 md:w-72 xl:w-90 2xl:w-80',
          order === 4 && 'md:row-start-2 xl:row-auto'
        )}
      >
        <div className="flex flex-col p-8">
          <div
            className={cn(
              'flex h-16 w-16 items-center justify-center rounded-full bg-primary-200'
            )}
          >
            <IconifyIcon
              icon={iconName}
              className={cn('h-8 w-8 text-primary-600')}
            />
          </div>
          <div className="mt-10">
            <h4 className="text-xl font-medium text-zinc-600">{title}</h4>
            <p className="mt-3 text-base leading-7 font-light text-zinc-500">
              {content}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const WorkingExplanationGrid = () => {
  /** The order of these cards matters */
  const explanationCards: ExplanationCardProps[] = [
    {
      order: 1,
      title: 'Search for courses',
      iconName: 'tabler:search', // Alternative icon: carbon:new-tab
      content:
        'Our robust search feature enables you to instantly discover your ideal courses.',
    },
    {
      order: 2,
      title: 'Ratings & Reviews',
      iconName: 'tabler:star',
      content:
        'Access course ratings and reviews to make informed decisions on course selection.',
    },
    {
      order: 3,
      title: 'Weekly Plans',
      iconName: 'pajamas:status',
      content:
        'Check course availability and seat status. Secure your spot in your desired courses.',
    },
    {
      order: 4,
      title: 'Grading Scheme',
      iconName: 'icon-park-outline:list-two',
      content:
        'Explore transparent grading schemes for each course. Understand grading criteria before taking the course.',
    },
  ];
  return (
    <>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 2xl:grid-cols-4">
        {explanationCards.map((card) => {
          return (
            <ExplanationCard
              key={card.order}
              order={card.order}
              title={card.title}
              content={card.content}
              iconName={card.iconName}
            />
          );
        })}
      </div>
    </>
  );
};

export const FeaturesSection = () => {
  return (
    <>
      <div className="flex flex-col">
        <h3 className="text-gradient mx-auto inline text-3xl font-semibold md:text-6xl">
          What Makes Us Special?
        </h3>
        <div className="mt-24 flex justify-center md:mt-30">
          <WorkingExplanationGrid />
        </div>
      </div>
    </>
  );
};
