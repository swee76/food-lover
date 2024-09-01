import React from 'react';

interface MealItemProps {
    title: string;
    slug: string;
    image: string;
    summary: string,
    creator: string
}

const MealItem: React.FC<MealItemProps> = ({title, slug, image, summary, creator}) => {
    return (
        <div>

        </div>
    );
};

export default MealItem;