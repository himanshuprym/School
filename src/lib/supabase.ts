import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface Student {
  id: string
  admission_id: string
  name: string
  email?: string
  phone?: string
  dob: string
  blood_group: string
  class_name: string
  section: string
  father_name?: string
  mother_name?: string
  address?: string
  profile_photo?: string
  status: string
  created_at: string
  updated_at: string
}

export interface Teacher {
  id: string
  teacher_id: string
  name: string
  email: string
  phone?: string
  subjects: string[]
  classes: string[]
  sections: string[]
  profile_photo?: string
  status: string
  created_at: string
  updated_at: string
}

export interface Homework {
  id: string
  title: string
  description?: string
  subject: string
  class_name: string
  section: string
  submission_date?: string
  created_by: string
  teacher_name?: string
  attachments?: string[]
  status: string
  created_at: string
  updated_at: string
}

export interface Notice {
  id: string
  title: string
  content: string
  date: string
  priority: 'low' | 'medium' | 'high'
  target_audience: 'all' | 'students' | 'teachers' | 'parents'
  created_by: string
  attachments?: string[]
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface Attendance {
  id: string
  student_id: string
  date: string
  status: 'present' | 'absent' | 'late' | 'excused'
  remarks?: string
  marked_by: string
  created_at: string
}

export interface Grade {
  id: string
  student_id: string
  subject: string
  exam_type: string
  marks_obtained: number
  total_marks: number
  grade?: string
  exam_date?: string
  created_by: string
  created_at: string
}

export interface Event {
  id: string
  title: string
  description?: string
  event_date: string
  event_time?: string
  location?: string
  event_type: 'academic' | 'sports' | 'cultural' | 'general' | 'holiday'
  target_audience: string
  created_by: string
  is_active: boolean
  created_at: string
}

export interface AdmissionApplication {
  id: string
  student_name: string
  father_name: string
  mother_name?: string
  email: string
  phone: string
  dob: string
  address: string
  grade_applying: string
  previous_school?: string
  documents?: string[]
  status: 'pending' | 'approved' | 'rejected' | 'waitlisted'
  remarks?: string
  created_at: string
  updated_at: string
}

export interface NeevApplication {
  id: string
  student_id?: string
  student_name: string
  father_name: string
  email: string
  phone: string
  dob: string
  aim?: string
  target_exams?: string
  status: 'pending' | 'approved' | 'rejected'
  progress_step: number
  interview_date?: string
  test_score?: number
  remarks?: string
  created_at: string
  updated_at: string
}

export interface LibraryBook {
  id: string
  title: string
  author: string
  isbn?: string
  category: string
  total_copies: number
  available_copies: number
  location?: string
  created_at: string
}

export interface BookIssue {
  id: string
  book_id: string
  student_id: string
  issue_date: string
  due_date: string
  return_date?: string
  fine_amount: number
  status: 'issued' | 'returned' | 'overdue'
  created_at: string
}

export interface FeeRecord {
  id: string
  student_id: string
  fee_type: string
  amount: number
  due_date: string
  paid_date?: string
  payment_method?: string
  transaction_id?: string
  status: 'pending' | 'paid' | 'overdue' | 'partial'
  remarks?: string
  created_at: string
}

export interface Timetable {
  id: string
  class_name: string
  section: string
  day_of_week: number
  period_number: number
  subject: string
  teacher_id: string
  start_time: string
  end_time: string
  room_number?: string
  created_at: string
}

// Auth helpers
export const signInWithCredentials = async (credentials: { admission_id?: string, teacher_id?: string, email?: string }, password: string, role: string) => {
  try {
    // Check if Supabase is properly configured
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
    
    // If Supabase is not configured or using placeholder values, use local data
    if (!supabaseUrl || !supabaseKey || supabaseUrl === 'your_supabase_url_here' || supabaseKey === 'your_supabase_anon_key_here') {
      console.log('Supabase not configured, using local data');
      return await signInWithLocalData(credentials, password, role);
    }
    
    let user = null;
    
    try {
      if (role === 'student') {
        const { data, error } = await supabase
          .from('students')
          .select('*')
          .eq('admission_id', credentials.admission_id)
          .single();
        
        if (error) {
          console.log('Supabase query failed, falling back to local data:', error);
          return await signInWithLocalData(credentials, password, role);
        }
        user = data;
      } else if (role === 'teacher') {
        const { data, error } = await supabase
          .from('teachers')
          .select('*')
          .or(`teacher_id.eq.${credentials.teacher_id},email.eq.${credentials.teacher_id}`)
          .single();
        
        if (error) {
          console.log('Supabase query failed, falling back to local data:', error);
          return await signInWithLocalData(credentials, password, role);
        }
        user = data;
      }

      if (user) {
        // In a real app, you'd verify the password here
        // For now, we'll simulate successful login
        return { user: { ...user, role }, error: null };
      }
      
      return { user: null, error: 'Invalid credentials' };
    } catch (supabaseError) {
      console.log('Supabase connection failed, falling back to local data:', supabaseError);
      return await signInWithLocalData(credentials, password, role);
    }
  } catch (error) {
    console.log('General error, falling back to local data:', error);
    // If anything fails, try local data
    return await signInWithLocalData(credentials, password, role);
  }
};

// Fallback authentication using local JSON data
const signInWithLocalData = async (credentials: { admission_id?: string, teacher_id?: string, email?: string }, password: string, role: string) => {
  try {
    console.log('Attempting local authentication with:', { credentials, password, role });
    
    if (role === 'student' && credentials.admission_id) {
      // Fetch local users data
      console.log('Fetching users.json...');
      const response = await fetch('/data/users.json');
      
      if (!response.ok) {
        console.error('Failed to fetch users.json:', response.status, response.statusText);
        return { user: null, error: 'Failed to load user data' };
      }
      
      const users = await response.json();
      console.log('Loaded users:', users.length, 'users found');
      
      // Find user by admission ID and verify password
      const user = users.find((u: any) => 
        u.admissionId === credentials.admission_id && 
        u.password === password &&
        u.roles.includes('student')
      );
      
      console.log('User found:', user ? 'Yes' : 'No');
      console.log('Looking for admissionId:', credentials.admission_id);
      console.log('Looking for password:', password);
      
      if (user) {
        // Transform the user data to match the expected format
        const transformedUser = {
          id: user.admissionId,
          admission_id: user.admissionId,
          name: user.name,
          dob: user.dob,
          blood_group: user.bloodGroup,
          class_name: user.className,
          section: user.section,
          profile_photo: user.profilePhoto?.replace('public\\', '/') || '/assest/logo.png',
          status: 'active',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        };
        
        console.log('Transformed user:', transformedUser);
        return { user: transformedUser, error: null };
      } else {
        console.log('Available users:', users.map((u: any) => ({ admissionId: u.admissionId, password: u.password })));
      }
    }
    
    return { user: null, error: 'Invalid credentials' };
  } catch (error) {
    console.error('Local authentication error:', error);
    return { user: null, error: 'Login failed' };
  }
};

// Data fetching helpers
export const fetchStudents = async (classFilter?: string, sectionFilter?: string) => {
  let query = supabase.from('students').select('*');
  
  if (classFilter) query = query.eq('class_name', classFilter);
  if (sectionFilter) query = query.eq('section', sectionFilter);
  
  return query.order('name');
};

export const fetchTeachers = async () => {
  return supabase.from('teachers').select('*').order('name');
};

export const fetchHomework = async (classFilter?: string, sectionFilter?: string) => {
  // Check if Supabase is configured
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
  
  if (!supabaseUrl || !supabaseKey || supabaseUrl === 'your_supabase_url_here') {
    // Return empty array for demo
    return { data: [], error: null };
  }
  
  let query = supabase.from('homework').select(`
    *,
    teacher:teachers(name)
  `);
  
  if (classFilter) query = query.eq('class_name', classFilter);
  if (sectionFilter) query = query.eq('section', sectionFilter);
  
  return query.order('created_at', { ascending: false });
};

export const fetchNotices = async () => {
  return supabase
    .from('notices')
    .select(`
      *,
      teacher:teachers(name)
    `)
    .eq('is_active', true)
    .order('created_at', { ascending: false });
};

export const fetchEvents = async () => {
  return supabase
    .from('events')
    .select('*')
    .eq('is_active', true)
    .order('event_date');
};

export const fetchAttendance = async (studentId: string, dateFrom?: string, dateTo?: string) => {
  // Check if Supabase is configured
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
  
  if (!supabaseUrl || !supabaseKey || supabaseUrl === 'your_supabase_url_here') {
    // Return sample attendance data for demo
    return { 
      data: [
        { id: '1', student_id: studentId, date: '2024-01-15', status: 'present', created_at: new Date().toISOString() },
        { id: '2', student_id: studentId, date: '2024-01-14', status: 'present', created_at: new Date().toISOString() },
        { id: '3', student_id: studentId, date: '2024-01-13', status: 'present', created_at: new Date().toISOString() },
        { id: '4', student_id: studentId, date: '2024-01-12', status: 'absent', created_at: new Date().toISOString() },
        { id: '5', student_id: studentId, date: '2024-01-11', status: 'present', created_at: new Date().toISOString() },
      ], 
      error: null 
    };
  }
  
  let query = supabase
    .from('attendance')
    .select('*')
    .eq('student_id', studentId);
    
  if (dateFrom) query = query.gte('date', dateFrom);
  if (dateTo) query = query.lte('date', dateTo);
  
  return query.order('date', { ascending: false });
};

export const fetchGrades = async (studentId: string) => {
  // Check if Supabase is configured
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
  
  if (!supabaseUrl || !supabaseKey || supabaseUrl === 'your_supabase_url_here') {
    // Return sample grades data for demo
    return { 
      data: [
        { 
          id: '1', 
          student_id: studentId, 
          subject: 'Mathematics', 
          exam_type: 'Mid Term', 
          marks_obtained: 85, 
          total_marks: 100, 
          exam_date: '2024-01-10',
          created_at: new Date().toISOString() 
        },
        { 
          id: '2', 
          student_id: studentId, 
          subject: 'Science', 
          exam_type: 'Mid Term', 
          marks_obtained: 92, 
          total_marks: 100, 
          exam_date: '2024-01-12',
          created_at: new Date().toISOString() 
        },
        { 
          id: '3', 
          student_id: studentId, 
          subject: 'English', 
          exam_type: 'Mid Term', 
          marks_obtained: 78, 
          total_marks: 100, 
          exam_date: '2024-01-14',
          created_at: new Date().toISOString() 
        }
      ], 
      error: null 
    };
  }
  
  return supabase
    .from('grades')
    .select('*')
    .eq('student_id', studentId)
    .order('exam_date', { ascending: false });
};