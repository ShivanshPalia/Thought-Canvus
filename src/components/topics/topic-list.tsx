
// 'use client'
// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// // import { Chip } from '@nextui-org/react';
// import { db } from '@/db';
// import paths from '@/paths';


// interface Topic {
//   id: string;
//   slug: string;
//   description:string;
// }

// export default function TopicList() {
//   const [topics, setTopics] = useState<Topic[]>([]);

//   useEffect(() => {
//     async function fetchTopics() {
//       try {
//         const topicsData = await db.topic.findMany();
//         console.log(topicsData);
//         setTopics(topicsData);
//       } catch (error) {
//         console.error('Error fetching topics:', error);
//       }
//     }
//     fetchTopics();
//   }, []);

//   return (
//     <div>
//       {topics.length > 0 ? (
//         <div className="flex flex-row flex-wrap gap-2 mb-4">
//           {topics.map((topic) => (
//             <div key={topic.id}>
//               <Link href={paths.topicShow(topic.slug)}>
//                 {/* <Chip color="warning" variant="shadow" className="bg-yellow-300 text-black"> */}
//                   {topic.slug}
//                 {/* </Chip> */}
//               </Link>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p>No topics available</p>
//       )}
//     </div>
//   );
// }


'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
// import { Chip } from '@nextui-org/react';
import { db } from '@/db';
import paths from '@/paths';

interface Topic {
  id: string;
  slug: string;
  description: string;
}
export default function TopicList() {
  const [topics, setTopics] = useState<Topic[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchTopics() {
      try {
        console.log('Fetching topics...');
        const topicsData = await db.topic.findMany();
        console.log(db.topic.findMany());
        
        console.log('Fetched topics:', topicsData);
        if(topicsData.length===0){
          console.warn("khaaliiiii");
        }
        setTopics(topicsData);
      } catch (error) {
        console.error('Error fetching topics:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchTopics();
  }, []);
 
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      {topics.length > 0 ? (
        <div className="flex flex-row flex-wrap gap-2 mb-4">
          {topics.map((topic) => (
            <div key={topic.id}>
              <Link href={paths.topicShow(topic.slug)}>
                {/* <Chip color="warning" variant="shadow" className="bg-yellow-300 text-black"> */}
                  {topic.slug}
                {/* </Chip> */}
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p>No topics available</p>
      )}
    </div>
  );
}
