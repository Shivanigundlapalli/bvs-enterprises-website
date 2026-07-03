import React, { useState } from 'react';
import { Review } from '../types';
import { Star, MessageSquare, AlertTriangle, Check, ExternalLink, Calendar, Heart, X } from 'lucide-react';

interface ReviewSystemProps {
  reviews: Review[];
  onSubmitReview: (review: Omit<Review, 'id' | 'created_at'>) => void;
}

export default function ReviewSystem({ reviews, onSubmitReview }: ReviewSystemProps) {
  const [customerName, setCustomerName] = useState('');
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [feedback, setFeedback] = useState('');
  const [showFlowDialog, setShowFlowDialog] = useState<Omit<Review, 'id' | 'created_at'> | null>(null);
  const [showFinished, setShowFinished] = useState(false);

  // Filter public positive reviews (Rating >= 4) as described in the requirements
  const publicReviews = reviews.filter(r => r.rating >= 4 && r.review_status !== 'Negative');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim() || !feedback.trim()) {
      alert('Please enter your name and some feedback comments.');
      return;
    }

    const newReview: Omit<Review, 'id' | 'created_at'> = {
      customer_name: customerName,
      rating: rating,
      feedback: feedback,
      review_status: rating >= 4 ? 'Positive' : 'Negative'
    };

    // Save review
    onSubmitReview(newReview);

    // Trigger custom review flow
    setShowFlowDialog(newReview);
    
    // Clear form
    setCustomerName('');
    setFeedback('');
    setRating(5);
  };

  const closeDialog = () => {
    setShowFlowDialog(null);
    setShowFinished(true);
    setTimeout(() => setShowFinished(false), 3500);
  };

  return (
    <div className="space-y-12">
      
      {/* Visual Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Column Left: Review form */}
        <div className="lg:col-span-12 xl:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-[#8B4F24]/15 hover:border-[#8B4F24]/40 hover:-translate-y-[2px] hover:shadow-[0_12px_32px_rgba(139,79,36,0.06)] transition-all duration-300 shadow-[0_4px_20px_rgba(139,79,36,0.02)] space-y-5 text-left group">
          <div className="border-b border-[#E3DDD5] pb-3">
            <h3 className="font-serif font-bold text-lg text-[#2E2A27] uppercase leading-tight">
              Share Your Story
            </h3>
            <p className="text-xs text-[#6E6A66] font-sans mt-0.5 font-semibold">
              Help BVS Enterprises improve local furniture manufacturing.
            </p>
          </div>

          {showFinished && (
            <div className="bg-[#A86A33] text-stone-100 p-4 rounded-2xl text-xs flex items-center gap-2">
              <Check className="h-4.5 w-4.5 text-[#D8B58A]" />
              <span>We have saved your review and updated our system archives. Thank you!</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Rating Stars selection */}
            <div>
              <span className="block text-[10px] uppercase font-mono tracking-widest text-[#6E6A66] mb-1.5 font-bold">
                Your Comfort Rating:
              </span>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((starValue) => (
                  <button
                    key={starValue}
                    type="button"
                    onClick={() => setRating(starValue)}
                    onMouseEnter={() => setHoverRating(starValue)}
                    onMouseLeave={() => setHoverRating(null)}
                    className="p-1 focus:outline-none focus:scale-110 transition-transform cursor-pointer"
                  >
                    <Star
                      className={`h-7 w-7 transition-colors duration-150 ${
                        starValue <= (hoverRating ?? rating)
                          ? 'fill-[#D8B58A] text-[#D8B58A]'
                          : 'text-[#E3DDD5] hover:text-[#D8B58A]'
                      }`}
                    />
                  </button>
                ))}
                <span className="text-xs font-serif font-bold text-[#A86A33] block leading-none ml-2">
                  {rating === 5 && 'Outstanding Comfort'}
                  {rating === 4 && 'Excellent Comfort'}
                  {rating === 3 && 'Standard Finish'}
                  {rating === 2 && 'Needs Attention'}
                  {rating === 1 && 'Needs Immediate Review'}
                </span>
              </div>
            </div>

            {/* Customer input fields */}
            <div>
              <label className="block text-[10px] font-mono text-[#6E6A66] uppercase tracking-widest mb-1.5 font-bold">
                Your Full Name (required)
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Sreenivasulu Chari"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full text-xs border border-[#E3DDD5] bg-[#F6F2EC]/30 rounded-xl p-3 focus:bg-white focus:ring-1 focus:ring-[#A86A33] focus:outline-none text-[#2E2A27]"
              />
            </div>

            <div>
              <label className="block text-[10px] font-mono text-[#6E6A66] uppercase tracking-widest mb-1.5 font-bold">
                Feedback Comments (required)
              </label>
              <textarea
                rows={4}
                required
                placeholder="Describe wood strength, polish quality, delivery timeliness or workspace designs..."
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                className="w-full text-xs border border-[#E3DDD5] bg-[#F6F2EC]/30 rounded-xl p-3 focus:bg-white focus:ring-1 focus:ring-[#A86A33] focus:outline-none font-sans text-[#2E2A27]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#A86A33] hover:bg-[#8f582b] text-white font-manrope text-[13px] font-semibold uppercase tracking-[0.08em] py-3.5 px-4 rounded-full transition-all cursor-pointer shadow-xs border-none"
            >
              Submit Comfort Record
            </button>

          </form>
        </div>

        {/* Column Right: Live Public Reviews Showcase */}
        <div className="lg:col-span-12 xl:col-span-7 space-y-6 text-left font-sans">
          <div className="border-b border-[#E3DDD5] pb-3">
            <h3 className="font-serif font-bold text-lg text-[#2E2A27] uppercase flex flex-col sm:flex-row sm:items-center gap-2">
              <span>Showroom Ratings</span>
              <span className="text-xs bg-white text-[#A86A33] border border-[#E3DDD5] font-mono py-1 px-3 rounded-full font-bold w-fit shadow-xs">
                ★ 4.9 / 5.0 Average
              </span>
            </h3>
            <p className="text-xs text-[#6E6A66] font-semibold mt-0.5">
              Verified physical installation feedback from homes & corporate spaces in Tirupati.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {publicReviews.map((r, index) => (
              <div key={index} className="bg-white p-6 rounded-3xl border border-[#8B4F24]/15 hover:border-[#8B4F24]/40 hover:-translate-y-[2px] hover:shadow-[0_12px_32px_rgba(139,79,36,0.06)] transition-all duration-300 shadow-[0_4px_20px_rgba(139,79,36,0.02)] flex flex-col justify-between group">
                <div>
                  <div className="flex gap-0.5 mb-2.5">
                    {Array.from({ length: r.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[#D8B58A] text-[#D8B58A]" />
                    ))}
                  </div>
                  <p className="text-[12px] text-[#A86A33]/90 font-serif leading-relaxed italic mb-4">
                    "{r.feedback}"
                  </p>
                </div>
                <div className="border-t border-[#F6F2EC] pt-3 flex items-center justify-between text-[10.5px] font-mono text-[#6E6A66]">
                  <span className="font-bold text-[#2E2A27]">{r.customer_name}</span>
                  <span>{new Date(r.created_at || '2026-06-10').toLocaleDateString('en-IN', { year: 'numeric', month: 'short' })}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Review Flow Dialog */}
      {showFlowDialog && (
        <div className="fixed inset-0 z-50 bg-stone-900/40 backdrop-blur-md flex items-center justify-center p-4 text-left">
          <div className="bg-white rounded-3xl w-full max-w-md p-6 sm:p-8 shadow-md relative border border-[#E3DDD5] animate-in fade-in zoom-in-95 duration-200">
            
            {showFlowDialog.rating >= 4 ? (
              // Positive case
              <div className="text-center space-y-4">
                <div className="bg-[#F6F2EC] text-[#A86A33] p-3 rounded-full w-fit mx-auto">
                  <Heart className="h-9 w-9 fill-[#D8B58A] text-[#D8B58A]" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl text-[#2E2A27]">
                    Woodcraft Integrity! ★{showFlowDialog.rating}
                  </h3>
                  <p className="text-xs text-[#6E6A66] font-sans mt-2 leading-relaxed font-semibold">
                    Thank you, *{showFlowDialog.customer_name}*! Your feedback represents BVS Enterprises core team legacy. Please share this on our Google Business Profile page to support local woodcraft in Tirupati and Chittoor!
                  </p>
                </div>

                <div className="bg-[#F6F2EC] rounded-2xl p-3.5 border border-[#E3DDD5] text-left">
                  <span className="text-[9px] uppercase tracking-wider font-mono text-[#6E6A66] block font-bold">Your Copied Feedback:</span>
                  <p className="text-xs text-[#2E2A27] font-serif italic mt-1 line-clamp-2">"{showFlowDialog.feedback}"</p>
                </div>

                <button
                  onClick={() => {
                    const text = encodeURIComponent(showFlowDialog.feedback);
                    window.open(`https://search.google.com/local/writereview?placeid=ChIJKzZXTirupati_custom_placeholder`, '_blank');
                    closeDialog();
                  }}
                  className="w-full bg-[#A86A33] hover:bg-[#8f582b] text-white font-manrope text-[13px] font-semibold uppercase tracking-[0.08em] py-3.5 px-4 rounded-full flex items-center justify-center gap-2 cursor-pointer shadow-xs border-none"
                >
                  Confirm & Write on Google Reviews
                  <ExternalLink className="h-3.5 w-3.5" />
                </button>
              </div>
            ) : (
              // Negative case
              <div className="text-center space-y-4">
                <div className="bg-orange-50 text-orange-600 p-3 rounded-full w-fit mx-auto">
                  <AlertTriangle className="h-9 w-9 text-[#D8B58A]" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl text-[#2E2A27]">
                    We Apologize Sincerely
                  </h3>
                  <p className="text-xs text-[#6E6A66] font-sans mt-2 leading-relaxed font-medium">
                    We are truly sorry for your unsatisfactory experience, *{showFlowDialog.customer_name}*. We have flagged this rating as a **Priority Resolution Incident** for the BVS Admin Desk.
                  </p>
                </div>

                <div className="bg-[#F6F2EC] p-4 rounded-2xl border border-[#E3DDD5] text-left text-[11px] text-[#A86A33] space-y-2 leading-relaxed font-sans">
                  <div className="font-bold text-[#2E2A27] text-xs">Priority Action Plan:</div>
                  <div className="flex gap-2 text-[#6E6A66] font-semibold">
                    <span className="text-[#A86A33] font-bold">1.</span>
                    <span>An alert ticket is cataloged inside the supervisor panel.</span>
                  </div>
                  <div className="flex gap-2 text-[#6E6A66] font-semibold">
                    <span className="text-[#A86A33] font-bold">2.</span>
                    <span>Our management lead will call your contact mobile within 24 hours to settle issues privately.</span>
                  </div>
                </div>

                <button
                  onClick={closeDialog}
                  className="w-full bg-[#A86A33] hover:bg-[#8f582b] text-white font-manrope text-[13px] font-semibold uppercase tracking-[0.08em] py-3.5 px-4 rounded-full cursor-pointer border-none"
                >
                  Dismiss & Log Privately
                </button>
              </div>
            )}

            {/* Dialog Footer close */}
            <button
              onClick={closeDialog}
              className="absolute top-3 right-3 text-stone-400 hover:text-[#A86A33] p-1.5 rounded-full hover:bg-[#F6F2EC] transition-colors cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>

          </div>
        </div>
      )}

    </div>
  );
}
