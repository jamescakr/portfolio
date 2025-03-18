import { GraduationCap, Trophy, Users, UserRoundPen } from "lucide-react";

export const ExpIconMap = {
  graduation: (
    <div className="custom-hover">
      <GraduationCap className="w-10 h-10" />
    </div>
  ),
  award: (
    <div className="custom-hover">
      <Trophy className="w-10 h-10" />
    </div>
  ),
  team: (
    <div className="custom-hover">
      <Users className="w-10 h-10" />
    </div>
  ),
  solo: (
    <div className="custom-hover">
      <UserRoundPen className="w-10 h-10" />
    </div>
  ),
};

export default ExpIconMap;
