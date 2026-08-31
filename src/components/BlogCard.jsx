import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export default function BlogCard({ post, onReadArticle }) {
  return (
    <div className="group rounded-3xl bg-white border border-brand-cyan/15 overflow-hidden shadow-sm hover:shadow-brand-lg hover:border-brand-cyan/40 transition-all duration-300 flex flex-col justify-between">
      <div>
        <div className="relative h-48 overflow-hidden bg-brand-slate">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-slate/70 via-transparent to-transparent"></div>
          
          <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-brand-orange text-white shadow-md">
            {post.category}
          </span>
        </div>

        <div className="p-6 space-y-3">
          <div className="flex items-center gap-4 text-[11px] text-gray-500 font-bold">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-brand-cyan" />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-brand-orange" />
              {post.readTime}
            </span>
          </div>

          <h3 className="font-serif text-xl font-bold text-brand-slate leading-snug group-hover:text-brand-cyan transition-colors">
            {post.title}
          </h3>

          <p className="text-gray-600 text-xs sm:text-sm line-clamp-3 leading-relaxed font-sans">
            {post.excerpt}
          </p>
        </div>
      </div>

      <div className="p-6 pt-0">
        <button
          onClick={() => onReadArticle(post)}
          className="w-full py-3 rounded-full text-xs font-bold uppercase tracking-wider text-brand-slate bg-gray-100 hover:bg-brand-cyan hover:text-white transition-all flex items-center justify-center gap-2"
        >
          <span>Read Article</span>
          <ArrowRight className="w-4 h-4 text-brand-orange" />
        </button>
      </div>
    </div>
  );
}
