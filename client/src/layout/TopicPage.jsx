import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../components/SideBar';
import TopicContent from '../components/TopicContent';

export default function TopicPage() {
  const { topic } = useParams();
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const fetchTopicData = async () => {
      try {
        const data = await import(`../data/topic/${topic}.json`);
        setContent(data.default);
        setActiveIndex(0); // Reset when topic changes
      } catch (err) {
        setError('Topic not found or failed to load.');
      } finally {
        setLoading(false);
      }
    };

    fetchTopicData();
  }, [topic]);

  if (loading) return <div className="p-6 text-center text-lg mt-[2%]">Loading {topic}...</div>;
  if (error) return <div className="p-6 text-center text-red-500 mt-[2%]">{error}</div>;

  return (
    <div className="flex">
      <Sidebar
        sections={content.sections}
        currentTopic={topic}
        setActiveIndex={setActiveIndex}
        activeIndex={activeIndex}
      />
      <TopicContent
        topic={topic}
        content={content}
        activeIndex={activeIndex}
      />
    </div>
  );
}
