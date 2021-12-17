import React from 'react'

const constants = {
  graphql_uri: '/graphql/',
  fontawesome_link: <a href="https://fontawesome.com/" 
                  target="_blank" 
                  rel="nooperner noreferrer" 
                  className="text-gray-200 italic">FontAwesome</a>,
  react_link: <a href="https://reactjs.org/" 
                  target="_blank" 
                  rel="nooperner noreferrer" 
                  className="text-gray-200 italic">React JS</a>,
  tailwind_link: <a href="https://tailwindcss.com/" 
                  target="_blank" 
                  rel="nooperner noreferrer" 
                  className="text-gray-200 italic">Tailwind CSS</a>,
  profile_link: <a href="http://prtkgoswami.github.io/" 
                  target="_blank" 
                  rel="nooperner noreferrer">Pratik Goswami</a>,
  sample_collection_data: [ 
    {
      id: "123876",
      title: "List 1",
      collections: [
        {
          id: "26351",
          title: "Collection 1",
          tasks: [
            {
              id: "914795",
              title: "Task 1",
              labels: ["new"],
              collectionId: "26351",
            },
            {
              id: "914796",
              title: "Task 2",
              labels: ["new"],
              collectionId: "26351",
            },
            {
              id: "914797",
              title: "Exercitationem voluptatum neque a ea aut! Modi numquam id culpa quis.",
              labels: ["new"],
              collectionId: "26351",
            },
            {
              id: "914798",
              title: "Task 4",
              labels: ["new"],
              collectionId: "26351",
            },
          ],
        },
        {
          id: "26352",
          title: "Collection 2",
          tasks: [
            {
              id: "914799",
              title: "Task 1",
              labels: ["new"],
              collectionId: "26352",
            },
            {
              id: "914800",
              title: "Task 2",
              labels: ["new"],
              collectionId: "26352",
            },
            {
              id: "914801",
              title: "Task 3",
              labels: ["new"],
              collectionId: "26352",
            },
            {
              id: "914802",
              title: "Task 4",
              labels: ["new"],
              collectionId: "26352",
            },
          ],
        },
        {
          id: "26353",
          title: "Collection 3",
          tasks: [
            {
              id: "914804",
              title: "Task 1",
              labels: ["new"],
              collectionId: "26353",
            },
            {
              id: "914805",
              title: "Task 2",
              labels: ["new"],
              collectionId: "26353",
            },
          ],
        },
        {
          id: "26354",
          title: "Collection 4",
          tasks: [],
        },
        {
          id: "26355",
          title: "Collection 5",
          tasks: [
            {
              id: "914806",
              title: "Task 1",
              labels: ["new"],
              collectionId: "26355",
            },
          ],
        },
      ],
    },
    {
      id: "123877",
      title: "List 2 is the best one of all Lists in the Sample Data",
      collections: []
    },
    {
      id: "123878",
      title: "List 3",
      collections: []
    },
    {
      id: "123879",
      title: "List 4",
      collections: []
    },
  ],
  sample_labels_data: [
    {
      id: "29786",
      title: "new",
      color: "#F9FAFB",
    },
    {
      id: "29787",
      title: "in-progress",
      color: "#FCD34D",
    },
    {
      id: "29788",
      title: "completed",
      color: "#34D399",
    },
    {
      id: "29789",
      title: "cancelled",
      color: "#EF4444",
    },
  ],
};

export default constants;